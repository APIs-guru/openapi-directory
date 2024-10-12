# RouteSpec

RouteSpec holds the desired state of the Route (from the client).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**traffic** | [**List[TrafficTarget]**](TrafficTarget.md) | Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations. Cloud Run currently supports a single configurationName. | [optional] 

## Example

```python
from openapi_client.models.route_spec import RouteSpec

# TODO update the JSON string below
json = "{}"
# create an instance of RouteSpec from a JSON string
route_spec_instance = RouteSpec.from_json(json)
# print the JSON string representation of the object
print(RouteSpec.to_json())

# convert the object into a dict
route_spec_dict = route_spec_instance.to_dict()
# create an instance of RouteSpec from a dict
route_spec_from_dict = RouteSpec.from_dict(route_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


