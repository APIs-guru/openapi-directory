# PayLine1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculator** | **str** | The pay lines&#39; calculator | [optional] 
**description** | **str** | The pay lines&#39; description | [optional] 
**generated** | **datetime** | The pay lines&#39; generated | [optional] 
**pay_code** | **str** | The pay lines&#39; pay code | [optional] 
**pay_code_type** | **str** | The pay lines&#39; pay code type | [optional] 
**pay_run_sequence** | **int** | The pay lines&#39; pay run sequence | [optional] 
**payment_date** | **date** | The pay lines&#39; payment date | [optional] 
**tax_period** | **int** | The pay lines&#39; tax period | [optional] 
**tax_year** | **int** | The pay lines&#39; tax year | [optional] 
**value** | **float** | The pay lines&#39; value | [optional] 

## Example

```python
from openapi_client.models.pay_line1 import PayLine1

# TODO update the JSON string below
json = "{}"
# create an instance of PayLine1 from a JSON string
pay_line1_instance = PayLine1.from_json(json)
# print the JSON string representation of the object
print(PayLine1.to_json())

# convert the object into a dict
pay_line1_dict = pay_line1_instance.to_dict()
# create an instance of PayLine1 from a dict
pay_line1_from_dict = PayLine1.from_dict(pay_line1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


