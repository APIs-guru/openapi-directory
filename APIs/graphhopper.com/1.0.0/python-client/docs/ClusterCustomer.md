# ClusterCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ClusterCustomerAddress**](ClusterCustomerAddress.md) |  | [optional] 
**id** | **str** | id of customer | [optional] 
**quantity** | **float** | demand of customer | [optional] 

## Example

```python
from openapi_client.models.cluster_customer import ClusterCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterCustomer from a JSON string
cluster_customer_instance = ClusterCustomer.from_json(json)
# print the JSON string representation of the object
print(ClusterCustomer.to_json())

# convert the object into a dict
cluster_customer_dict = cluster_customer_instance.to_dict()
# create an instance of ClusterCustomer from a dict
cluster_customer_from_dict = ClusterCustomer.from_dict(cluster_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


