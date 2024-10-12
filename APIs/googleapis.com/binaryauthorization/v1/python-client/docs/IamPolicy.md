# IamPolicy

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { \"bindings\": [ { \"role\": \"roles/resourcemanager.organizationAdmin\", \"members\": [ \"user:mike@example.com\", \"group:admins@example.com\", \"domain:google.com\", \"serviceAccount:my-project-id@appspot.gserviceaccount.com\" ] }, { \"role\": \"roles/resourcemanager.organizationViewer\", \"members\": [ \"user:eve@example.com\" ], \"condition\": { \"title\": \"expirable access\", \"description\": \"Does not grant access after Sep 2020\", \"expression\": \"request.time < timestamp('2020-10-01T00:00:00.000Z')\", } } ], \"etag\": \"BwWWja0YfJA=\", \"version\": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindings** | [**List[Binding]**](Binding.md) | Associates a list of &#x60;members&#x60;, or principals, with a &#x60;role&#x60;. Optionally, may specify a &#x60;condition&#x60; that determines how and when the &#x60;bindings&#x60; are applied. Each of the &#x60;bindings&#x60; must contain at least one principal. The &#x60;bindings&#x60; in a &#x60;Policy&#x60; can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the &#x60;bindings&#x60; grant 50 different roles to &#x60;user:alice@example.com&#x60;, and not to any other principal, then you can add another 1,450 principals to the &#x60;bindings&#x60; in the &#x60;Policy&#x60;. | [optional] 
**etag** | **bytearray** | &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response to &#x60;getIamPolicy&#x60;, and systems are expected to put that etag in the request to &#x60;setIamPolicy&#x60; to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the &#x60;etag&#x60; field whenever you call &#x60;setIamPolicy&#x60;. If you omit this field, then IAM allows you to overwrite a version &#x60;3&#x60; policy with a version &#x60;1&#x60; policy, and all of the conditions in the version &#x60;3&#x60; policy are lost. | [optional] 
**version** | **int** | Specifies the format of the policy. Valid values are &#x60;0&#x60;, &#x60;1&#x60;, and &#x60;3&#x60;. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version &#x60;3&#x60;. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the &#x60;etag&#x60; field whenever you call &#x60;setIamPolicy&#x60;. If you omit this field, then IAM allows you to overwrite a version &#x60;3&#x60; policy with a version &#x60;1&#x60; policy, and all of the conditions in the version &#x60;3&#x60; policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). | [optional] 

## Example

```python
from openapi_client.models.iam_policy import IamPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IamPolicy from a JSON string
iam_policy_instance = IamPolicy.from_json(json)
# print the JSON string representation of the object
print(IamPolicy.to_json())

# convert the object into a dict
iam_policy_dict = iam_policy_instance.to_dict()
# create an instance of IamPolicy from a dict
iam_policy_from_dict = IamPolicy.from_dict(iam_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


