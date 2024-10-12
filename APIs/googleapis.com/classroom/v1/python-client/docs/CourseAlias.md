# CourseAlias

Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | Alias string. The format of the string indicates the desired alias scoping. * &#x60;d:&#x60; indicates a domain-scoped alias. Example: &#x60;d:math_101&#x60; * &#x60;p:&#x60; indicates a project-scoped alias. Example: &#x60;p:abc123&#x60; This field has a maximum length of 256 characters. | [optional] 

## Example

```python
from openapi_client.models.course_alias import CourseAlias

# TODO update the JSON string below
json = "{}"
# create an instance of CourseAlias from a JSON string
course_alias_instance = CourseAlias.from_json(json)
# print the JSON string representation of the object
print(CourseAlias.to_json())

# convert the object into a dict
course_alias_dict = course_alias_instance.to_dict()
# create an instance of CourseAlias from a dict
course_alias_from_dict = CourseAlias.from_dict(course_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


