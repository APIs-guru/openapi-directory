

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://6-dot-authentiqio.appspot.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def head_key_pk_(self, request: operations.HeadKeyPkRequest) -> operations.HeadKeyPkResponse:
        r"""HEAD info on Authentiq ID
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        
        client = self._client
        
        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadKeyPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_bind(self, request: operations.KeyBindRequest) -> operations.KeyBindResponse:
        r"""Update Authentiq ID by replacing the object.
        
        v4: `JWT(sub,email,phone)` to bind email/phone hash; 
        
        v5: POST issuer-signed email & phone scopes
        and PUT to update registration `JWT(sub, pk, devtoken, ...)`
        
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyBindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyBind200ApplicationJSON])
                res.key_bind_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_register(self, request: operations.KeyRegisterRequest) -> operations.KeyRegisterResponse:
        r"""Register a new ID `JWT(sub, devtoken)`
        
        v5: `JWT(sub, pk, devtoken, ...)`
        
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/key"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyRegisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyRegister201ApplicationJSON])
                res.key_register_201_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_retrieve(self, request: operations.KeyRetrieveRequest) -> operations.KeyRetrieveResponse:
        r"""Get public details of an Authentiq ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyRetrieveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyRetrieveJwt])
                res.jwt = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_revoke(self, request: operations.KeyRevokeRequest) -> operations.KeyRevokeResponse:
        r"""Revoke an Identity (Key) with a revocation secret
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyRevokeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyRevoke200ApplicationJSON])
                res.key_revoke_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_revoke_nosecret(self, request: operations.KeyRevokeNosecretRequest) -> operations.KeyRevokeNosecretResponse:
        r"""Revoke an Authentiq ID using email & phone.
        
        If called with `email` and `phone` only, a verification code 
        will be sent by email. Do a second call adding `code` to 
        complete the revocation.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/key"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyRevokeNosecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyRevokeNosecret200ApplicationJSON])
                res.key_revoke_nosecret_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_update(self, request: operations.KeyUpdateRequest) -> operations.KeyUpdateResponse:
        r"""update properties of an Authentiq ID.
        (not operational in v4; use PUT for now)
        
        v5: POST issuer-signed email & phone scopes in
        a self-signed JWT
        
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyUpdate200ApplicationJSON])
                res.key_update_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def push_login_request(self, request: operations.PushLoginRequestRequest) -> operations.PushLoginRequestResponse:
        r"""push sign-in request
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/login"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PushLoginRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PushLoginRequest200ApplicationJSON])
                res.push_login_request_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_confirm(self, request: operations.SignConfirmRequest) -> operations.SignConfirmResponse:
        r"""this is a scope confirmation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SignConfirm202ApplicationJSON])
                res.sign_confirm_202_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_delete(self, request: operations.SignDeleteRequest) -> operations.SignDeleteResponse:
        r"""delete a verification job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SignDelete200ApplicationJSON])
                res.sign_delete_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_request(self, request: operations.SignRequestRequest) -> operations.SignRequestResponse:
        r"""scope verification request
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scope"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SignRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SignRequest201ApplicationJSON])
                res.sign_request_201_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_retrieve(self, request: operations.SignRetrieveRequest) -> operations.SignRetrieveResponse:
        r"""get the status / current content of a verification job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignRetrieveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SignRetrieveJwt])
                res.jwt = out
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_retrieve_head(self, request: operations.SignRetrieveHeadRequest) -> operations.SignRetrieveHeadResponse:
        r"""HEAD to get the status of a verification job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignRetrieveHeadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_update(self, request: operations.SignUpdateRequest) -> operations.SignUpdateResponse:
        r"""authority updates a JWT with its signature
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    