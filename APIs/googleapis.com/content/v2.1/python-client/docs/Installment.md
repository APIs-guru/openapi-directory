# Installment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Price**](Price.md) |  | [optional] 
**months** | **str** | The number of installments the buyer has to pay. | [optional] 

## Example

```python
from openapi_client.models.installment import Installment

# TODO update the JSON string below
json = "{}"
# create an instance of Installment from a JSON string
installment_instance = Installment.from_json(json)
# print the JSON string representation of the object
print(Installment.to_json())

# convert the object into a dict
installment_dict = installment_instance.to_dict()
# create an instance of Installment from a dict
installment_from_dict = Installment.from_dict(installment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


