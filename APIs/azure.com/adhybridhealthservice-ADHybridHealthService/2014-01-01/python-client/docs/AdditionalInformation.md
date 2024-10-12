# AdditionalInformation

The additional information for a property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_properties** | **bool** | Indicates if properties are present or not. | [optional] 
**properties** | **object** | The list of properties which are included in the additional information. | [optional] 
**title_name** | **str** | The title name for the property. | [optional] 
**title_value** | **str** | The title value for the property. | [optional] 

## Example

```python
from openapi_client.models.additional_information import AdditionalInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalInformation from a JSON string
additional_information_instance = AdditionalInformation.from_json(json)
# print the JSON string representation of the object
print(AdditionalInformation.to_json())

# convert the object into a dict
additional_information_dict = additional_information_instance.to_dict()
# create an instance of AdditionalInformation from a dict
additional_information_from_dict = AdditionalInformation.from_dict(additional_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


