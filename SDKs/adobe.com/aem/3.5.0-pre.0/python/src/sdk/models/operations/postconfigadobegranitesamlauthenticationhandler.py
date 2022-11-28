from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams:
    add_group_memberships: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'addGroupMemberships', 'style': 'form', 'explode': True }})
    add_group_memberships_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'addGroupMemberships@TypeHint', 'style': 'form', 'explode': True }})
    assertion_consumer_service_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assertionConsumerServiceURL', 'style': 'form', 'explode': True }})
    assertion_consumer_service_url_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assertionConsumerServiceURL@TypeHint', 'style': 'form', 'explode': True }})
    clock_tolerance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'clockTolerance', 'style': 'form', 'explode': True }})
    clock_tolerance_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clockTolerance@TypeHint', 'style': 'form', 'explode': True }})
    create_user: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'createUser', 'style': 'form', 'explode': True }})
    create_user_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createUser@TypeHint', 'style': 'form', 'explode': True }})
    default_groups: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'defaultGroups', 'style': 'form', 'explode': True }})
    default_groups_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'defaultGroups@TypeHint', 'style': 'form', 'explode': True }})
    default_redirect_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'defaultRedirectUrl', 'style': 'form', 'explode': True }})
    default_redirect_url_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'defaultRedirectUrl@TypeHint', 'style': 'form', 'explode': True }})
    digest_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'digestMethod', 'style': 'form', 'explode': True }})
    digest_method_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'digestMethod@TypeHint', 'style': 'form', 'explode': True }})
    group_membership_attribute: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupMembershipAttribute', 'style': 'form', 'explode': True }})
    group_membership_attribute_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupMembershipAttribute@TypeHint', 'style': 'form', 'explode': True }})
    handle_logout: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'handleLogout', 'style': 'form', 'explode': True }})
    handle_logout_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'handleLogout@TypeHint', 'style': 'form', 'explode': True }})
    idp_cert_alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idpCertAlias', 'style': 'form', 'explode': True }})
    idp_cert_alias_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idpCertAlias@TypeHint', 'style': 'form', 'explode': True }})
    idp_http_redirect: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'idpHttpRedirect', 'style': 'form', 'explode': True }})
    idp_http_redirect_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idpHttpRedirect@TypeHint', 'style': 'form', 'explode': True }})
    idp_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idpUrl', 'style': 'form', 'explode': True }})
    idp_url_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idpUrl@TypeHint', 'style': 'form', 'explode': True }})
    key_store_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyStorePassword', 'style': 'form', 'explode': True }})
    key_store_password_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyStorePassword@TypeHint', 'style': 'form', 'explode': True }})
    logout_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'logoutUrl', 'style': 'form', 'explode': True }})
    logout_url_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'logoutUrl@TypeHint', 'style': 'form', 'explode': True }})
    name_id_format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameIdFormat', 'style': 'form', 'explode': True }})
    name_id_format_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameIdFormat@TypeHint', 'style': 'form', 'explode': True }})
    path: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    path_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'path@TypeHint', 'style': 'form', 'explode': True }})
    service_ranking: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'service.ranking', 'style': 'form', 'explode': True }})
    service_ranking_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service.ranking@TypeHint', 'style': 'form', 'explode': True }})
    service_provider_entity_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceProviderEntityId', 'style': 'form', 'explode': True }})
    service_provider_entity_id_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceProviderEntityId@TypeHint', 'style': 'form', 'explode': True }})
    signature_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signatureMethod', 'style': 'form', 'explode': True }})
    signature_method_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signatureMethod@TypeHint', 'style': 'form', 'explode': True }})
    sp_private_key_alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'spPrivateKeyAlias', 'style': 'form', 'explode': True }})
    sp_private_key_alias_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'spPrivateKeyAlias@TypeHint', 'style': 'form', 'explode': True }})
    synchronize_attributes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'synchronizeAttributes', 'style': 'form', 'explode': True }})
    synchronize_attributes_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'synchronizeAttributes@TypeHint', 'style': 'form', 'explode': True }})
    use_encryption: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useEncryption', 'style': 'form', 'explode': True }})
    use_encryption_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'useEncryption@TypeHint', 'style': 'form', 'explode': True }})
    user_id_attribute: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIDAttribute', 'style': 'form', 'explode': True }})
    user_id_attribute_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIDAttribute@TypeHint', 'style': 'form', 'explode': True }})
    user_intermediate_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIntermediatePath', 'style': 'form', 'explode': True }})
    user_intermediate_path_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIntermediatePath@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConfigAdobeGraniteSamlAuthenticationHandlerRequest:
    query_params: PostConfigAdobeGraniteSamlAuthenticationHandlerQueryParams = field()
    

@dataclass
class PostConfigAdobeGraniteSamlAuthenticationHandlerResponse:
    content_type: str = field()
    status_code: int = field()
    
