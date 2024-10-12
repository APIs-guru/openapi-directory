# RowAccessPolicy

Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | Output only. The time when this row access policy was created, in milliseconds since the epoch. | [optional] [readonly] 
**etag** | **str** | Output only. A hash of this resource. | [optional] [readonly] 
**filter_predicate** | **str** | Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region&#x3D;\&quot;EU\&quot; date_field &#x3D; CAST(&#39;2019-9-27&#39; as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0 | [optional] 
**last_modified_time** | **str** | Output only. The time when this row access policy was last modified, in milliseconds since the epoch. | [optional] [readonly] 
**row_access_policy_reference** | [**RowAccessPolicyReference**](RowAccessPolicyReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.row_access_policy import RowAccessPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RowAccessPolicy from a JSON string
row_access_policy_instance = RowAccessPolicy.from_json(json)
# print the JSON string representation of the object
print(RowAccessPolicy.to_json())

# convert the object into a dict
row_access_policy_dict = row_access_policy_instance.to_dict()
# create an instance of RowAccessPolicy from a dict
row_access_policy_from_dict = RowAccessPolicy.from_dict(row_access_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


