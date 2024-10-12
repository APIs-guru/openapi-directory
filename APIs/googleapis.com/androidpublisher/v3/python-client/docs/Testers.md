# Testers

The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_groups** | **List[str]** | All testing Google Groups, as email addresses. | [optional] 

## Example

```python
from openapi_client.models.testers import Testers

# TODO update the JSON string below
json = "{}"
# create an instance of Testers from a JSON string
testers_instance = Testers.from_json(json)
# print the JSON string representation of the object
print(Testers.to_json())

# convert the object into a dict
testers_dict = testers_instance.to_dict()
# create an instance of Testers from a dict
testers_from_dict = Testers.from_dict(testers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


