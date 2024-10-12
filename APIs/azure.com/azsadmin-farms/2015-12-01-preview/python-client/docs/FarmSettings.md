# FarmSettings

Storage farm settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_throttle_is_enabled** | **bool** | Switch of bandwidth throttle enablement. | [optional] 
**cors_allowed_origins_list** | **str** | The list of allowed origins. | [optional] 
**data_center_uri_host_suffixes** | **str** | The suffixes of URI of hosts in data center. | [optional] 
**default_egress_threshold_in_gbps** | **float** | Default egress threshold (in Gbps). | [optional] 
**default_ingress_threshold_in_gbps** | **float** | Default ingress threshold (in Gbps). | [optional] 
**default_intranet_egress_threshold_in_gbps** | **float** | Default Intranet egress threshold (in Gbps). | [optional] 
**default_intranet_ingress_threshold_in_gbps** | **float** | Default Intranet ingress threshold (in Gbps). | [optional] 
**default_request_threshold_in_tps** | **float** | Default request threshold (in TPS). | [optional] 
**default_throttle_probability_decay_interval_in_seconds** | **int** | Interval (in seconds) of default throttle probability decay. | [optional] 
**default_total_egress_threshold_in_gbps** | **float** | Default total egress threshold (in Gbps). | [optional] 
**default_total_ingress_threshold_in_gbps** | **float** | Default total ingress threshold (in Gbps). | [optional] 
**feedback_refresh_interval_in_seconds** | **int** | Interval (in seconds) of feedback refresh. | [optional] 
**grace_period_for_full_throttling_in_refresh_intervals** | **int** | Grace period for full throttling in refresh intervals. | [optional] 
**grace_period_max_throttle_probability** | **float** | Maximum probability of throttle in grace period. | [optional] 
**host_style_http_port** | **int** | Host style HTTP port. | [optional] 
**host_style_https_port** | **int** | Host style HTTPs port. | [optional] 
**minimum_egress_threshold_in_gbps** | **float** | Minimum egress threshold (in Gbps). | [optional] 
**minimum_ingress_threshold_in_gbps** | **float** | Minimum ingress threshold (in Gbps). | [optional] 
**minimum_intranet_egress_threshold_in_gbps** | **float** | Minimum Intranet egress threshold (in Gbps). | [optional] 
**minimum_intranet_ingress_threshold_in_gbps** | **float** | Minimum Intranet ingress threshold (in Gbps). | [optional] 
**minimum_request_threshold_in_tps** | **float** | Minimum request threshold (in TPS). | [optional] 
**minimum_total_egress_threshold_in_gbps** | **float** | Minimum total egress threshold (in Gbp | [optional] 
**minimum_total_ingress_threshold_in_gbps** | **float** | Minimum total ingress threshold (in Gbps). | [optional] 
**number_of_accounts_to_sync** | **int** | Number of accounts to sync. | [optional] 
**overall_egress_threshold_in_gbps** | **float** | Overall egress threshold (in Gbps). | [optional] 
**overall_ingress_threshold_in_gbps** | **float** | Overall ingress threshold (in Gbps) | [optional] 
**overall_intranet_egress_threshold_in_gbps** | **float** | Overall Intranet egress threshold (in Gbps). | [optional] 
**overall_intranet_ingress_threshold_in_gbps** | **float** | Overall Intranet ingress threshold (in Gbps). | [optional] 
**overall_request_threshold_in_tps** | **float** | Overall request threshold (in TPS). | [optional] 
**overall_total_egress_threshold_in_gbps** | **float** | Overall total egress threshold (in Gbps). | [optional] 
**overall_total_ingress_threshold_in_gbps** | **float** | Overall total ingress threshold (in Gbps). | [optional] 
**retention_period_for_deleted_storage_accounts_in_days** | **int** | The retention period (in days) for deleted storage account. | [optional] 
**settings_polling_interval_in_second** | **int** | The polling interval (in second). | [optional] 
**tolerance_factor_for_egress** | **float** | Tolerance factor for egress. | [optional] 
**tolerance_factor_for_ingress** | **float** | Tolerance factor for ingress. | [optional] 
**tolerance_factor_for_intranet_egress** | **float** | Tolerance factor for Intranet egress. | [optional] 
**tolerance_factor_for_intranet_ingress** | **float** | Tolerance factor for Intranet ingress. | [optional] 
**tolerance_factor_for_total_egress** | **float** | Tolerance factor for total egress. | [optional] 
**tolerance_factor_for_total_ingress** | **float** | Tolerance factor for total ingress. | [optional] 
**tolerance_factor_for_tps** | **float** | Tolerance factor for TPS. | [optional] 
**usage_collection_interval_in_seconds** | **int** | Interval (in seconds) of storage usage collection. | [optional] 

## Example

```python
from openapi_client.models.farm_settings import FarmSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FarmSettings from a JSON string
farm_settings_instance = FarmSettings.from_json(json)
# print the JSON string representation of the object
print(FarmSettings.to_json())

# convert the object into a dict
farm_settings_dict = farm_settings_instance.to_dict()
# create an instance of FarmSettings from a dict
farm_settings_from_dict = FarmSettings.from_dict(farm_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


