# MeetingDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.meeting_describe import MeetingDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of MeetingDescribe from a JSON string
meeting_describe_instance = MeetingDescribe.from_json(json)
# print the JSON string representation of the object
print(MeetingDescribe.to_json())

# convert the object into a dict
meeting_describe_dict = meeting_describe_instance.to_dict()
# create an instance of MeetingDescribe from a dict
meeting_describe_from_dict = MeetingDescribe.from_dict(meeting_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


