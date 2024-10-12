# ProductionOrStagingEndpointInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_endpoint_key** | **str** | The endpoint key. | [optional] 
**endpoint_region** | **str** | The endpoint&#39;s region. | [optional] 
**endpoint_url** | **str** | The Runtime endpoint URL for this model version. | [optional] 
**failed_regions** | **str** | Regions where publishing failed. | [optional] 
**is_staging** | **bool** | Indicates if the staging slot should be used, instead of the Production one. | [optional] 
**published_date_time** | **str** | Timestamp when was last published. | [optional] 
**region** | **str** | The target region that the application is published to. | [optional] 
**version_id** | **str** | The version ID to publish. | [optional] 

## Example

```python
from openapi_client.models.production_or_staging_endpoint_info import ProductionOrStagingEndpointInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProductionOrStagingEndpointInfo from a JSON string
production_or_staging_endpoint_info_instance = ProductionOrStagingEndpointInfo.from_json(json)
# print the JSON string representation of the object
print(ProductionOrStagingEndpointInfo.to_json())

# convert the object into a dict
production_or_staging_endpoint_info_dict = production_or_staging_endpoint_info_instance.to_dict()
# create an instance of ProductionOrStagingEndpointInfo from a dict
production_or_staging_endpoint_info_from_dict = ProductionOrStagingEndpointInfo.from_dict(production_or_staging_endpoint_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


