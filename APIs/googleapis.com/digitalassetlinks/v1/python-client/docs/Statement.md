# Statement

Describes a reliable statement that has been made about the relationship between a source asset and a target asset. Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere. For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relation** | **str** | The relation identifies the use of the statement as intended by the source asset&#39;s owner (that is, the person or entity who issued the statement). Every complete statement has a relation. We identify relations with strings of the format &#x60;/&#x60;, where &#x60;&#x60; must be one of a set of pre-defined purpose categories, and &#x60;&#x60; is a free-form lowercase alphanumeric string that describes the specific use case of the statement. Refer to [our API documentation](/digital-asset-links/v1/relation-strings) for the current list of supported relations. Example: &#x60;delegate_permission/common.handle_all_urls&#x60; REQUIRED | [optional] 
**source** | [**Asset**](Asset.md) |  | [optional] 
**target** | [**Asset**](Asset.md) |  | [optional] 

## Example

```python
from openapi_client.models.statement import Statement

# TODO update the JSON string below
json = "{}"
# create an instance of Statement from a JSON string
statement_instance = Statement.from_json(json)
# print the JSON string representation of the object
print(Statement.to_json())

# convert the object into a dict
statement_dict = statement_instance.to_dict()
# create an instance of Statement from a dict
statement_from_dict = Statement.from_dict(statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


