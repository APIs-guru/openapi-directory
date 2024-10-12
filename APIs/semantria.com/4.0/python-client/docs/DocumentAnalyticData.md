# DocumentAnalyticData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_categories** | [**List[AutoCategory]**](AutoCategory.md) | Auto-generated categories applicable for the document | 
**config_id** | **str** | Unique configuration identifier. Usually 36 alphanumeric characters | 
**details** | [**List[Details]**](Details.md) | Returns sentences from the original document with POS tags within | 
**entities** | [**List[Entity]**](Entity.md) | Returns the named entities and user defined entities from the text | 
**id** | **str** | Unique document identifier. Can be up to 36 alphanumeric characters | 
**intentions** | [**List[Intention]**](Intention.md) | Returns intentions list detected by the engine | 
**job_id** | **str** | Specific marker of a job document belongs to, can be used for documents ordering on client side | 
**language** | **str** | Determined language of source text | 
**language_score** | **float** | The percentage score of the best match of language among detected languages | 
**model_sentiment** | [**ModelSentiment**](ModelSentiment.md) |  | 
**opinions** | [**List[Opinion]**](Opinion.md) | Returns the list of opinions extracted from the source text | 
**phrases** | [**List[Phrase]**](Phrase.md) | Returns sentiment-bearing phrases of the document | 
**relations** | [**List[Relation]**](Relation.md) | Returns relations which represent a connection between one or more Entity objects | 
**sentiment_polarity** | **str** | Verbal representation of sentiment score. Can be \&quot;negative\&quot;, \&quot;positive\&quot; or \&quot;neutral\&quot; | 
**sentiment_score** | **float** | A sentiment analysis of the document text | 
**source_text** | **str** | Original source text passed by client for this document | 
**status** | **str** | Status of the document | 
**summary** | **str** | A summary of the document text | 
**taxonomy** | [**List[Topic]**](Topic.md) | Returns the taxonomy determined for the text | 
**themes** | [**List[Theme]**](Theme.md) | Returns themes of the document | 
**topics** | [**List[Topic]**](Topic.md) | Returns the concept and query defined topics determined for the text | 

## Example

```python
from openapi_client.models.document_analytic_data import DocumentAnalyticData

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentAnalyticData from a JSON string
document_analytic_data_instance = DocumentAnalyticData.from_json(json)
# print the JSON string representation of the object
print(DocumentAnalyticData.to_json())

# convert the object into a dict
document_analytic_data_dict = document_analytic_data_instance.to_dict()
# create an instance of DocumentAnalyticData from a dict
document_analytic_data_from_dict = DocumentAnalyticData.from_dict(document_analytic_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


