# ConversionsBatchInsertRequest

Insert Conversions Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversions** | [**List[Conversion]**](Conversion.md) | The set of conversions to insert. | [optional] 
**encryption_info** | [**EncryptionInfo**](EncryptionInfo.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#conversionsBatchInsertRequest\&quot;. | [optional] 

## Example

```python
from openapi_client.models.conversions_batch_insert_request import ConversionsBatchInsertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionsBatchInsertRequest from a JSON string
conversions_batch_insert_request_instance = ConversionsBatchInsertRequest.from_json(json)
# print the JSON string representation of the object
print(ConversionsBatchInsertRequest.to_json())

# convert the object into a dict
conversions_batch_insert_request_dict = conversions_batch_insert_request_instance.to_dict()
# create an instance of ConversionsBatchInsertRequest from a dict
conversions_batch_insert_request_from_dict = ConversionsBatchInsertRequest.from_dict(conversions_batch_insert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


