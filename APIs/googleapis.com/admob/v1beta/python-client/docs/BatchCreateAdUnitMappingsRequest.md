# BatchCreateAdUnitMappingsRequest

Request to create a batch of ad unit mappings under the specific AdMob account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreateAdUnitMappingRequest]**](CreateAdUnitMappingRequest.md) | Required. The request message specifying the ad unit mappings to create. A maximum of 100 ad unit mappings can be created in a batch. If the number of ad unit mappings in the batch request exceed 100, the entire request will be rejected and no ad unit mappings will be created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_ad_unit_mappings_request import BatchCreateAdUnitMappingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateAdUnitMappingsRequest from a JSON string
batch_create_ad_unit_mappings_request_instance = BatchCreateAdUnitMappingsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateAdUnitMappingsRequest.to_json())

# convert the object into a dict
batch_create_ad_unit_mappings_request_dict = batch_create_ad_unit_mappings_request_instance.to_dict()
# create an instance of BatchCreateAdUnitMappingsRequest from a dict
batch_create_ad_unit_mappings_request_from_dict = BatchCreateAdUnitMappingsRequest.from_dict(batch_create_ad_unit_mappings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


