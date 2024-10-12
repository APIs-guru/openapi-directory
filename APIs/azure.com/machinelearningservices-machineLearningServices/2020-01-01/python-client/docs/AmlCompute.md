# AmlCompute

An Azure Machine Learning compute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AmlComputeAllOfProperties**](AmlComputeAllOfProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.aml_compute import AmlCompute

# TODO update the JSON string below
json = "{}"
# create an instance of AmlCompute from a JSON string
aml_compute_instance = AmlCompute.from_json(json)
# print the JSON string representation of the object
print(AmlCompute.to_json())

# convert the object into a dict
aml_compute_dict = aml_compute_instance.to_dict()
# create an instance of AmlCompute from a dict
aml_compute_from_dict = AmlCompute.from_dict(aml_compute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


