# SrvRecord

An SRV record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | The port value for this SRV record. | [optional] 
**priority** | **int** | The priority value for this SRV record. | [optional] 
**target** | **str** | The target domain name for this SRV record. | [optional] 
**weight** | **int** | The weight value for this SRV record. | [optional] 

## Example

```python
from openapi_client.models.srv_record import SrvRecord

# TODO update the JSON string below
json = "{}"
# create an instance of SrvRecord from a JSON string
srv_record_instance = SrvRecord.from_json(json)
# print the JSON string representation of the object
print(SrvRecord.to_json())

# convert the object into a dict
srv_record_dict = srv_record_instance.to_dict()
# create an instance of SrvRecord from a dict
srv_record_from_dict = SrvRecord.from_dict(srv_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


