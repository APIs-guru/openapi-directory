# GoogleCloudRetailV2SearchRequestBoostSpec

Boost specification to boost certain items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition_boost_specs** | [**List[GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec]**](GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec.md) | Condition boost specifications. If a product matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20. | [optional] 
**skip_boost_spec_validation** | **bool** | Whether to skip boostspec validation. If this field is set to true, invalid BoostSpec.condition_boost_specs will be ignored and valid BoostSpec.condition_boost_specs will still be applied. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_search_request_boost_spec import GoogleCloudRetailV2SearchRequestBoostSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2SearchRequestBoostSpec from a JSON string
google_cloud_retail_v2_search_request_boost_spec_instance = GoogleCloudRetailV2SearchRequestBoostSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2SearchRequestBoostSpec.to_json())

# convert the object into a dict
google_cloud_retail_v2_search_request_boost_spec_dict = google_cloud_retail_v2_search_request_boost_spec_instance.to_dict()
# create an instance of GoogleCloudRetailV2SearchRequestBoostSpec from a dict
google_cloud_retail_v2_search_request_boost_spec_from_dict = GoogleCloudRetailV2SearchRequestBoostSpec.from_dict(google_cloud_retail_v2_search_request_boost_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


