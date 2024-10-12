# BillbeeInterfacesBillbeeAPIModelCommentApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**from_customer** | **bool** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_comment_api_model import BillbeeInterfacesBillbeeAPIModelCommentApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelCommentApiModel from a JSON string
billbee_interfaces_billbee_api_model_comment_api_model_instance = BillbeeInterfacesBillbeeAPIModelCommentApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelCommentApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_comment_api_model_dict = billbee_interfaces_billbee_api_model_comment_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelCommentApiModel from a dict
billbee_interfaces_billbee_api_model_comment_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelCommentApiModel.from_dict(billbee_interfaces_billbee_api_model_comment_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


