# PayRun2

The journal lines' pay run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.pay_run2 import PayRun2

# TODO update the JSON string below
json = "{}"
# create an instance of PayRun2 from a JSON string
pay_run2_instance = PayRun2.from_json(json)
# print the JSON string representation of the object
print(PayRun2.to_json())

# convert the object into a dict
pay_run2_dict = pay_run2_instance.to_dict()
# create an instance of PayRun2 from a dict
pay_run2_from_dict = PayRun2.from_dict(pay_run2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


