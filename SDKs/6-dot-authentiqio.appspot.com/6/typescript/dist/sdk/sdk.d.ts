import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://6-dot-authentiqio.appspot.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * headKeyPk - HEAD info on Authentiq ID
     *
    **/
    headKeyPk(req: operations.HeadKeyPkRequest, config?: AxiosRequestConfig): Promise<operations.HeadKeyPkResponse>;
    /**
     * keyBind - Update Authentiq ID by replacing the object.
     *
     * v4: `JWT(sub,email,phone)` to bind email/phone hash;
     *
     * v5: POST issuer-signed email & phone scopes
     * and PUT to update registration `JWT(sub, pk, devtoken, ...)`
     *
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    keyBind(req: operations.KeyBindRequest, config?: AxiosRequestConfig): Promise<operations.KeyBindResponse>;
    /**
     * keyRegister - Register a new ID `JWT(sub, devtoken)`
     *
     * v5: `JWT(sub, pk, devtoken, ...)`
     *
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    keyRegister(req: operations.KeyRegisterRequest, config?: AxiosRequestConfig): Promise<operations.KeyRegisterResponse>;
    /**
     * keyRetrieve - Get public details of an Authentiq ID.
     *
    **/
    keyRetrieve(req: operations.KeyRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.KeyRetrieveResponse>;
    /**
     * keyRevoke - Revoke an Identity (Key) with a revocation secret
    **/
    keyRevoke(req: operations.KeyRevokeRequest, config?: AxiosRequestConfig): Promise<operations.KeyRevokeResponse>;
    /**
     * keyRevokeNosecret - Revoke an Authentiq ID using email & phone.
     *
     * If called with `email` and `phone` only, a verification code
     * will be sent by email. Do a second call adding `code` to
     * complete the revocation.
     *
    **/
    keyRevokeNosecret(req: operations.KeyRevokeNosecretRequest, config?: AxiosRequestConfig): Promise<operations.KeyRevokeNosecretResponse>;
    /**
     * keyUpdate - update properties of an Authentiq ID.
     * (not operational in v4; use PUT for now)
     *
     * v5: POST issuer-signed email & phone scopes in
     * a self-signed JWT
     *
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    keyUpdate(req: operations.KeyUpdateRequest, config?: AxiosRequestConfig): Promise<operations.KeyUpdateResponse>;
    /**
     * pushLoginRequest - push sign-in request
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    pushLoginRequest(req: operations.PushLoginRequestRequest, config?: AxiosRequestConfig): Promise<operations.PushLoginRequestResponse>;
    /**
     * signConfirm - this is a scope confirmation
    **/
    signConfirm(req: operations.SignConfirmRequest, config?: AxiosRequestConfig): Promise<operations.SignConfirmResponse>;
    /**
     * signDelete - delete a verification job
    **/
    signDelete(req: operations.SignDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SignDeleteResponse>;
    /**
     * signRequest - scope verification request
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    signRequest(req: operations.SignRequestRequest, config?: AxiosRequestConfig): Promise<operations.SignRequestResponse>;
    /**
     * signRetrieve - get the status / current content of a verification job
    **/
    signRetrieve(req: operations.SignRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveResponse>;
    /**
     * signRetrieveHead - HEAD to get the status of a verification job
    **/
    signRetrieveHead(req: operations.SignRetrieveHeadRequest, config?: AxiosRequestConfig): Promise<operations.SignRetrieveHeadResponse>;
    /**
     * signUpdate - authority updates a JWT with its signature
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    signUpdate(req: operations.SignUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SignUpdateResponse>;
}
export {};
