# PayInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The pay instructions&#39; description | [optional] 
**end_date** | **date** | The pay instructions&#39; end date | [optional] 
**pay_line_tag** | **str** | The pay instructions&#39; pay line tag | [optional] 
**start_date** | **date** | The pay instructions&#39; start date | [optional] 

## Example

```python
from openapi_client.models.pay_instruction1 import PayInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of PayInstruction1 from a JSON string
pay_instruction1_instance = PayInstruction1.from_json(json)
# print the JSON string representation of the object
print(PayInstruction1.to_json())

# convert the object into a dict
pay_instruction1_dict = pay_instruction1_instance.to_dict()
# create an instance of PayInstruction1 from a dict
pay_instruction1_from_dict = PayInstruction1.from_dict(pay_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


