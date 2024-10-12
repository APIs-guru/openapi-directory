# ApplicationReference

Activity in applications other than Drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The reference type corresponding to this event. | [optional] 

## Example

```python
from openapi_client.models.application_reference import ApplicationReference

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationReference from a JSON string
application_reference_instance = ApplicationReference.from_json(json)
# print the JSON string representation of the object
print(ApplicationReference.to_json())

# convert the object into a dict
application_reference_dict = application_reference_instance.to_dict()
# create an instance of ApplicationReference from a dict
application_reference_from_dict = ApplicationReference.from_dict(application_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


