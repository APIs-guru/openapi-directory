from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class SamlConfigurationProperties:
    add_group_memberships: Optional[SamlConfigurationPropertyItemsBoolean] = field(default=None)
    assertion_consumer_service_url: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    clock_tolerance: Optional[SamlConfigurationPropertyItemsLong] = field(default=None)
    create_user: Optional[SamlConfigurationPropertyItemsBoolean] = field(default=None)
    default_groups: Optional[SamlConfigurationPropertyItemsArray] = field(default=None)
    default_redirect_url: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    digest_method: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    group_membership_attribute: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    handle_logout: Optional[SamlConfigurationPropertyItemsBoolean] = field(default=None)
    idp_cert_alias: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    idp_http_redirect: Optional[SamlConfigurationPropertyItemsBoolean] = field(default=None)
    idp_url: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    key_store_password: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    logout_url: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    name_id_format: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    path: Optional[SamlConfigurationPropertyItemsArray] = field(default=None)
    service_ranking: Optional[SamlConfigurationPropertyItemsLong] = field(default=None)
    service_provider_entity_id: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    signature_method: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    sp_private_key_alias: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    synchronize_attributes: Optional[SamlConfigurationPropertyItemsArray] = field(default=None)
    use_encryption: Optional[SamlConfigurationPropertyItemsBoolean] = field(default=None)
    user_id_attribute: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    user_intermediate_path: Optional[SamlConfigurationPropertyItemsString] = field(default=None)
    
