# ConversionList

A list of conversions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion** | [**List[Conversion]**](Conversion.md) | The conversions being requested. | [optional] 
**kind** | **str** | Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList. | [optional] 

## Example

```python
from openapi_client.models.conversion_list import ConversionList

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionList from a JSON string
conversion_list_instance = ConversionList.from_json(json)
# print the JSON string representation of the object
print(ConversionList.to_json())

# convert the object into a dict
conversion_list_dict = conversion_list_instance.to_dict()
# create an instance of ConversionList from a dict
conversion_list_from_dict = ConversionList.from_dict(conversion_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


