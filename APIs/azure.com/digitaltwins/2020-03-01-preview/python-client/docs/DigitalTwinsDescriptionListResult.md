# DigitalTwinsDescriptionListResult

A list of DigitalTwins description objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of DigitalTwins description objects. | [optional] 
**value** | [**List[DigitalTwinsDescription]**](DigitalTwinsDescription.md) | A list of DigitalTwins description objects. | [optional] 

## Example

```python
from openapi_client.models.digital_twins_description_list_result import DigitalTwinsDescriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsDescriptionListResult from a JSON string
digital_twins_description_list_result_instance = DigitalTwinsDescriptionListResult.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsDescriptionListResult.to_json())

# convert the object into a dict
digital_twins_description_list_result_dict = digital_twins_description_list_result_instance.to_dict()
# create an instance of DigitalTwinsDescriptionListResult from a dict
digital_twins_description_list_result_from_dict = DigitalTwinsDescriptionListResult.from_dict(digital_twins_description_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


