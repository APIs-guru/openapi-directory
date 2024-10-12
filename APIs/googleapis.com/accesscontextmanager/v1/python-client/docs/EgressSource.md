# EgressSource

The source that EgressPolicy authorizes access from inside the ServicePerimeter to somewhere outside the ServicePerimeter boundaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_level** | **str** | An AccessLevel resource name that allows protected resources inside the ServicePerimeters to access outside the ServicePerimeter boundaries. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If an AccessLevel name is not specified, only resources within the perimeter can be accessed through Google Cloud calls with request origins within the perimeter. Example: &#x60;accessPolicies/MY_POLICY/accessLevels/MY_LEVEL&#x60;. If a single &#x60;*&#x60; is specified for &#x60;access_level&#x60;, then all EgressSources will be allowed. | [optional] 

## Example

```python
from openapi_client.models.egress_source import EgressSource

# TODO update the JSON string below
json = "{}"
# create an instance of EgressSource from a JSON string
egress_source_instance = EgressSource.from_json(json)
# print the JSON string representation of the object
print(EgressSource.to_json())

# convert the object into a dict
egress_source_dict = egress_source_instance.to_dict()
# create an instance of EgressSource from a dict
egress_source_from_dict = EgressSource.from_dict(egress_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


