# ConversionStatus

The original conversion that was inserted or updated and whether there were any errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion** | [**Conversion**](Conversion.md) |  | [optional] 
**errors** | [**List[ConversionError]**](ConversionError.md) | A list of errors related to this conversion. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#conversionStatus\&quot;. | [optional] 

## Example

```python
from openapi_client.models.conversion_status import ConversionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionStatus from a JSON string
conversion_status_instance = ConversionStatus.from_json(json)
# print the JSON string representation of the object
print(ConversionStatus.to_json())

# convert the object into a dict
conversion_status_dict = conversion_status_instance.to_dict()
# create an instance of ConversionStatus from a dict
conversion_status_from_dict = ConversionStatus.from_dict(conversion_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


