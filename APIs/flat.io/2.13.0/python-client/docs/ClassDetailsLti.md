# ClassDetailsLti

Meta information provided by the LTI consumer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | Unique context identifier provided | [optional] 
**context_label** | **str** | Context label | [optional] 
**context_title** | **str** | Context title | [optional] 

## Example

```python
from openapi_client.models.class_details_lti import ClassDetailsLti

# TODO update the JSON string below
json = "{}"
# create an instance of ClassDetailsLti from a JSON string
class_details_lti_instance = ClassDetailsLti.from_json(json)
# print the JSON string representation of the object
print(ClassDetailsLti.to_json())

# convert the object into a dict
class_details_lti_dict = class_details_lti_instance.to_dict()
# create an instance of ClassDetailsLti from a dict
class_details_lti_from_dict = ClassDetailsLti.from_dict(class_details_lti_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


