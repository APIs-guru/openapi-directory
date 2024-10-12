# ClusterCustomerAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Latitude | [optional] 
**lon** | **float** | Longitude | [optional] 
**street_hint** | **str** | Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. | [optional] 

## Example

```python
from openapi_client.models.cluster_customer_address import ClusterCustomerAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterCustomerAddress from a JSON string
cluster_customer_address_instance = ClusterCustomerAddress.from_json(json)
# print the JSON string representation of the object
print(ClusterCustomerAddress.to_json())

# convert the object into a dict
cluster_customer_address_dict = cluster_customer_address_instance.to_dict()
# create an instance of ClusterCustomerAddress from a dict
cluster_customer_address_from_dict = ClusterCustomerAddress.from_dict(cluster_customer_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


