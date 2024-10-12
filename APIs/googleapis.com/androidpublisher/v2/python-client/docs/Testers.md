# Testers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_groups** | **List[str]** | A list of all Google Groups, as email addresses, that define testers for this track. | [optional] 

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


