# RestDescriptionEndpointsInner

A single endpoint object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecated** | **bool** | Whether this endpoint is deprecated | [optional] 
**description** | **str** | A string describing the host designated by the URL | [optional] 
**endpoint_url** | **str** | The URL of the endpoint target host | [optional] 
**location** | **str** | The location of the endpoint | [optional] 

## Example

```python
from openapi_client.models.rest_description_endpoints_inner import RestDescriptionEndpointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RestDescriptionEndpointsInner from a JSON string
rest_description_endpoints_inner_instance = RestDescriptionEndpointsInner.from_json(json)
# print the JSON string representation of the object
print(RestDescriptionEndpointsInner.to_json())

# convert the object into a dict
rest_description_endpoints_inner_dict = rest_description_endpoints_inner_instance.to_dict()
# create an instance of RestDescriptionEndpointsInner from a dict
rest_description_endpoints_inner_from_dict = RestDescriptionEndpointsInner.from_dict(rest_description_endpoints_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


