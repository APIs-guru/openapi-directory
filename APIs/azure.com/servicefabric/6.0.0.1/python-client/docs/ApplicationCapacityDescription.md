# ApplicationCapacityDescription

Describes capacity information for services of this application. This description can be used for describing the following. - Reserving the capacity for the services on the nodes - Limiting the total number of nodes that services of this application can run on - Limiting the custom capacity metrics to limit the total consumption of this metric by the services of this application 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_metrics** | [**List[ApplicationMetricDescription]**](ApplicationMetricDescription.md) | List of application capacity metric description. | [optional] 
**maximum_nodes** | **int** | The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node. | [optional] [default to 0]
**minimum_nodes** | **int** | The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property. | [optional] 

## Example

```python
from openapi_client.models.application_capacity_description import ApplicationCapacityDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationCapacityDescription from a JSON string
application_capacity_description_instance = ApplicationCapacityDescription.from_json(json)
# print the JSON string representation of the object
print(ApplicationCapacityDescription.to_json())

# convert the object into a dict
application_capacity_description_dict = application_capacity_description_instance.to_dict()
# create an instance of ApplicationCapacityDescription from a dict
application_capacity_description_from_dict = ApplicationCapacityDescription.from_dict(application_capacity_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


