# DatasetAccessInner

An object that defines dataset access for an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | [**DatasetAccessEntry**](DatasetAccessEntry.md) |  | [optional] 
**domain** | **str** | [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: \&quot;example.com\&quot;. Maps to IAM policy member \&quot;domain:DOMAIN\&quot;. | [optional] 
**group_by_email** | **str** | [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member \&quot;group:GROUP\&quot;. | [optional] 
**iam_member** | **str** | [Pick one] Some other type of member that appears in the IAM Policy but isn&#39;t a user, group, domain, or special group. | [optional] 
**role** | **str** | An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: OWNER &lt;&#x3D;&gt; roles/bigquery.dataOwner WRITER &lt;&#x3D;&gt; roles/bigquery.dataEditor READER &lt;&#x3D;&gt; roles/bigquery.dataViewer This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to \&quot;roles/bigquery.dataOwner\&quot;, it will be returned back as \&quot;OWNER\&quot;. | [optional] 
**routine** | [**RoutineReference**](RoutineReference.md) |  | [optional] 
**special_group** | **str** | [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members. | [optional] 
**user_by_email** | **str** | [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member \&quot;user:EMAIL\&quot; or \&quot;serviceAccount:EMAIL\&quot;. | [optional] 
**view** | [**TableReference**](TableReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.dataset_access_inner import DatasetAccessInner

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetAccessInner from a JSON string
dataset_access_inner_instance = DatasetAccessInner.from_json(json)
# print the JSON string representation of the object
print(DatasetAccessInner.to_json())

# convert the object into a dict
dataset_access_inner_dict = dataset_access_inner_instance.to_dict()
# create an instance of DatasetAccessInner from a dict
dataset_access_inner_from_dict = DatasetAccessInner.from_dict(dataset_access_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


