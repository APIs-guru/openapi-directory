# CreateSchedule200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**Schedule**](Schedule.md) |  | 

## Example

```python
from openapi_client.models.create_schedule200_response import CreateSchedule200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSchedule200Response from a JSON string
create_schedule200_response_instance = CreateSchedule200Response.from_json(json)
# print the JSON string representation of the object
print(CreateSchedule200Response.to_json())

# convert the object into a dict
create_schedule200_response_dict = create_schedule200_response_instance.to_dict()
# create an instance of CreateSchedule200Response from a dict
create_schedule200_response_from_dict = CreateSchedule200Response.from_dict(create_schedule200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


