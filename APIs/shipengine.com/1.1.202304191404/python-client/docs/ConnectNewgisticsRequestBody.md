# ConnectNewgisticsRequestBody

A Newgistics account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**induction_site** | **str** | Induction site | 
**mailer_id** | **int** | Mailer id | [optional] 
**merchant_id** | **int** | Merchant id | [optional] 
**nickname** | **str** | Nickname | 

## Example

```python
from openapi_client.models.connect_newgistics_request_body import ConnectNewgisticsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectNewgisticsRequestBody from a JSON string
connect_newgistics_request_body_instance = ConnectNewgisticsRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectNewgisticsRequestBody.to_json())

# convert the object into a dict
connect_newgistics_request_body_dict = connect_newgistics_request_body_instance.to_dict()
# create an instance of ConnectNewgisticsRequestBody from a dict
connect_newgistics_request_body_from_dict = ConnectNewgisticsRequestBody.from_dict(connect_newgistics_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


