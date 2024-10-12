# ItemGroup

The type that defines the columns returned in the <b>Item Group</b> feed file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_image_urls** | **str** | A pipe separated (&lt;code&gt;|&lt;/code&gt;) list of URLs for the additional images for the item group. These images are in addition to the primary image, which is returned in the &lt;b&gt;imageUrl&lt;/b&gt; column. &lt;b&gt;Note: &lt;/b&gt; This column can contain multiple values. | [optional] 
**image_altering_prohibited** | **bool** | A boolean that indicates whether the images can be altered. If the value is &lt;code&gt;true&lt;/code&gt;, you cannot modify the image. &lt;p&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt; Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. &lt;/span&gt;&lt;/p&gt; | [optional] 
**image_url** | **str** | The URL to the primary image of the item. The other images of the item group are returned in the &lt;b&gt; additionalImageUrls&lt;/b&gt; column. | [optional] 
**item_group_id** | **str** | The unique identifier for the item group. This ID is returned in the &lt;b&gt; primaryItemGroupId&lt;/b&gt; column of the &lt;a href&#x3D;\&quot;/api-docs/buy/feed/resources/item/methods/getItemFeed\&quot;&gt;Item Feed&lt;/a&gt; file. | [optional] 
**item_group_type** | **str** | The item group type. For example:&lt;code&gt; SELLER_DEFINED_VARIATIONS&lt;/code&gt;, indicates that the item group was created by the seller. &lt;br&gt;&lt;br&gt;Code so that your app gracefully handles any future changes to this list. | [optional] 
**title** | **str** | The seller created title of the item group. This text is an escaped string when special characters are present, using the following rules:&lt;/p&gt;   &lt;ul&gt;     &lt;li&gt;Double quotes (&amp;#34;) and backslashes (&amp;#92;) in the Title are escaped with a backslash (&amp;#92;) character&lt;/li&gt;      &lt;li&gt;If there are any tabs (&amp;#92;t), double quotes (&amp;#34;), or backslashes (&amp;#92;) in the Title, the entire Title will be wrapped in double quotes.&lt;/li&gt;   &lt;/ul&gt;   &lt;p&gt;&lt;b&gt;For example&lt;/b&gt;&lt;/p&gt;   &lt;p&gt;Before:&lt;/p&gt;   &lt;p&gt;&lt;code&gt;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W&lt;b&gt;&amp;#92;&lt;/b&gt;Tracking&lt;/code&gt;   &lt;/p&gt;   &lt;p&gt;&lt;code&gt;Marvel Legends HULK 8&lt;b&gt;&amp;#34;&lt;/b&gt; Figure Avengers Age of Ultron Studios 6&lt;b&gt;&amp;#34;&lt;/b&gt; Series&lt;/code&gt;   &lt;/p&gt;   &lt;p&gt;After:&lt;/p&gt;   &lt;p&gt;&lt;code&gt;&amp;#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W&lt;b&gt;&amp;#92;&amp;#92;&lt;/b&gt; Tracking&amp;#34;&lt;/code&gt;   &lt;/p&gt;   &lt;p&gt;&lt;code&gt;&amp;#34;Marvel Legends HULK 8&lt;b&gt;&amp;#92;&amp;#34;&lt;/b&gt; Figure Avengers Age of Ultron Studios 6&lt;b&gt;&amp;#92;&amp;#34;&lt;/b&gt; Series&lt;b&gt;&amp;#34;&lt;/b&gt; &lt;/code&gt;   &lt;/p&gt; | [optional] 
**varies_by_localized_aspects** | **str** | A pipe separated (&lt;code&gt;|&lt;/code&gt;) list of the aspect (variation) names for this item group. The aspect name is BASE64 encoded. &lt;b&gt;Note: &lt;/b&gt; This column can contain multiple values.  &lt;p&gt;&amp;nbsp;&amp;nbsp;&lt;b&gt; Encoded Format:&lt;/b&gt; &lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;&lt;em&gt;aspectName&lt;/em&gt;|&lt;em&gt;aspectName&lt;/em&gt;&lt;/code&gt; &lt;/p&gt;   &lt;p&gt;&amp;nbsp;&amp;nbsp;&lt;b&gt; Encoded Example&lt;/b&gt; (The delimiters are &lt;b style&#x3D;\&quot;font-family: &#39;Arial Black&#39;;\&quot;&gt;emphasized&lt;/b&gt;): &lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;Q29sb3I&#x3D;&lt;b style&#x3D;\&quot;font-family: &#39;Arial Black&#39;;\&quot;&gt;|&lt;/b&gt;U2l6ZQ&#x3D;&#x3D;&lt;/code&gt; &lt;/p&gt;      &lt;p&gt;&amp;nbsp;&amp;nbsp;&lt;b&gt; Decoded: &lt;/b&gt; &lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;Color|Size &lt;/p&gt; | [optional] 

## Example

```python
from openapi_client.models.item_group import ItemGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ItemGroup from a JSON string
item_group_instance = ItemGroup.from_json(json)
# print the JSON string representation of the object
print(ItemGroup.to_json())

# convert the object into a dict
item_group_dict = item_group_instance.to_dict()
# create an instance of ItemGroup from a dict
item_group_from_dict = ItemGroup.from_dict(item_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


