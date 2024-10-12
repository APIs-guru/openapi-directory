# ErrorV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_payment_method** | [**AuthorizedPaymentMethod**](AuthorizedPaymentMethod.md) |  | [optional] 
**correlation_id** | **str** |  | [optional] 
**error_code** | **str** |  | [optional] 
**error_messages** | **List[str]** |  | [optional] 
**fraud_status** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_v2 import ErrorV2

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorV2 from a JSON string
error_v2_instance = ErrorV2.from_json(json)
# print the JSON string representation of the object
print(ErrorV2.to_json())

# convert the object into a dict
error_v2_dict = error_v2_instance.to_dict()
# create an instance of ErrorV2 from a dict
error_v2_from_dict = ErrorV2.from_dict(error_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


