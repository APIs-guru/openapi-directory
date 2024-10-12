# RecognizeFile400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Text error message describing the invalid input | [optional] 

## Example

```python
from openapi_client.models.recognize_file400_response import RecognizeFile400Response

# TODO update the JSON string below
json = "{}"
# create an instance of RecognizeFile400Response from a JSON string
recognize_file400_response_instance = RecognizeFile400Response.from_json(json)
# print the JSON string representation of the object
print(RecognizeFile400Response.to_json())

# convert the object into a dict
recognize_file400_response_dict = recognize_file400_response_instance.to_dict()
# create an instance of RecognizeFile400Response from a dict
recognize_file400_response_from_dict = RecognizeFile400Response.from_dict(recognize_file400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


