# ConversionsBatchUpdateResponse

Update Conversions Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_failures** | **bool** | Indicates that some or all conversions failed to update. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#conversionsBatchUpdateResponse\&quot;. | [optional] 
**status** | [**List[ConversionStatus]**](ConversionStatus.md) | The update status of each conversion. Statuses are returned in the same order that conversions are updated. | [optional] 

## Example

```python
from openapi_client.models.conversions_batch_update_response import ConversionsBatchUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionsBatchUpdateResponse from a JSON string
conversions_batch_update_response_instance = ConversionsBatchUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(ConversionsBatchUpdateResponse.to_json())

# convert the object into a dict
conversions_batch_update_response_dict = conversions_batch_update_response_instance.to_dict()
# create an instance of ConversionsBatchUpdateResponse from a dict
conversions_batch_update_response_from_dict = ConversionsBatchUpdateResponse.from_dict(conversions_batch_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


