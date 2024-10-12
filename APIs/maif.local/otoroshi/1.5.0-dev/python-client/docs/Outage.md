# Outage

An outage by the Snow Monkey on a service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptor_id** | **str** | The service impacted by outage | 
**descriptor_name** | **str** | The name of service impacted by outage | 
**duration** | **int** | The duration of the outage | 
**until** | **str** | The end of the outage | 

## Example

```python
from openapi_client.models.outage import Outage

# TODO update the JSON string below
json = "{}"
# create an instance of Outage from a JSON string
outage_instance = Outage.from_json(json)
# print the JSON string representation of the object
print(Outage.to_json())

# convert the object into a dict
outage_dict = outage_instance.to_dict()
# create an instance of Outage from a dict
outage_from_dict = Outage.from_dict(outage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


