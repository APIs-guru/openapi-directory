# OnlineSzamlaStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[OnlineSzamlaStatusMessage]**](OnlineSzamlaStatusMessage.md) |  | [optional] 
**status** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.online_szamla_status import OnlineSzamlaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of OnlineSzamlaStatus from a JSON string
online_szamla_status_instance = OnlineSzamlaStatus.from_json(json)
# print the JSON string representation of the object
print(OnlineSzamlaStatus.to_json())

# convert the object into a dict
online_szamla_status_dict = online_szamla_status_instance.to_dict()
# create an instance of OnlineSzamlaStatus from a dict
online_szamla_status_from_dict = OnlineSzamlaStatus.from_dict(online_szamla_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


