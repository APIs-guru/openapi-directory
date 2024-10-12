# PlusAclentryResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | A descriptive name for this entry. Suitable for display. | [optional] 
**id** | **str** | The ID of the entry. For entries of type \&quot;person\&quot; or \&quot;circle\&quot;, this is the ID of the resource. For other types, this property is not set. | [optional] 
**type** | **str** | The type of entry describing to whom access is granted. Possible values are:   - \&quot;person\&quot; - Access to an individual.  - \&quot;circle\&quot; - Access to members of a circle.  - \&quot;myCircles\&quot; - Access to members of all the person&#39;s circles.  - \&quot;extendedCircles\&quot; - Access to members of all the person&#39;s circles, plus all of the people in their circles.  - \&quot;domain\&quot; - Access to members of the person&#39;s Google Apps domain.  - \&quot;public\&quot; - Access to anyone on the web. | [optional] 

## Example

```python
from openapi_client.models.plus_aclentry_resource import PlusAclentryResource

# TODO update the JSON string below
json = "{}"
# create an instance of PlusAclentryResource from a JSON string
plus_aclentry_resource_instance = PlusAclentryResource.from_json(json)
# print the JSON string representation of the object
print(PlusAclentryResource.to_json())

# convert the object into a dict
plus_aclentry_resource_dict = plus_aclentry_resource_instance.to_dict()
# create an instance of PlusAclentryResource from a dict
plus_aclentry_resource_from_dict = PlusAclentryResource.from_dict(plus_aclentry_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


