# Gender

A person's gender.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_me_as** | **str** | Free form text field for pronouns that should be used to address the person. Common values are: * &#x60;he&#x60;/&#x60;him&#x60; * &#x60;she&#x60;/&#x60;her&#x60; * &#x60;they&#x60;/&#x60;them&#x60; | [optional] 
**formatted_value** | **str** | Output only. The value of the gender translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. Unspecified or custom value are not localized. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The gender for the person. The gender can be custom or one of these predefined values: * &#x60;male&#x60; * &#x60;female&#x60; * &#x60;unspecified&#x60; | [optional] 

## Example

```python
from openapi_client.models.gender import Gender

# TODO update the JSON string below
json = "{}"
# create an instance of Gender from a JSON string
gender_instance = Gender.from_json(json)
# print the JSON string representation of the object
print(Gender.to_json())

# convert the object into a dict
gender_dict = gender_instance.to_dict()
# create an instance of Gender from a dict
gender_from_dict = Gender.from_dict(gender_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


