# ConversionError

The error code and description for a conversion that failed to insert or update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#conversionError\&quot;. | [optional] 
**message** | **str** | A description of the error. | [optional] 

## Example

```python
from openapi_client.models.conversion_error import ConversionError

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionError from a JSON string
conversion_error_instance = ConversionError.from_json(json)
# print the JSON string representation of the object
print(ConversionError.to_json())

# convert the object into a dict
conversion_error_dict = conversion_error_instance.to_dict()
# create an instance of ConversionError from a dict
conversion_error_from_dict = ConversionError.from_dict(conversion_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


