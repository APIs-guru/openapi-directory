# SrvRecord

An SRV record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | Gets or sets the port of the service for this record. | [optional] 
**priority** | **int** | Gets or sets the priority metric for this record. | [optional] 
**target** | **str** | Gets or sets the domain name of the target for this record, without a terminating dot. | [optional] 
**weight** | **int** | Gets or sets the weight metric for this record. | [optional] 

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


