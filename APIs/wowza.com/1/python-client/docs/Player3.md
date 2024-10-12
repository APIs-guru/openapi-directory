# Player3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countdown** | **bool** | A clock that appears in the player before the event and counts down to the start of the stream. Specify &lt;strong&gt;true&lt;/strong&gt; to display the countdown clock. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**countdown_at** | **datetime** | The date and time that the event starts, used by the countdown clock. Enter &lt;strong&gt;YYYY-MM-DD HH:MM:SS&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. | [optional] 
**hosted_page** | **bool** | A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, &lt;strong&gt;true&lt;/strong&gt;, creates a hosted page. Specify &lt;strong&gt;false&lt;/strong&gt; to not create a hosted web page. | [optional] 
**hosted_page_description** | **str** | A description that appears on the hosted page below the player. Can&#39;t include custom HTML, JavaScript, or other tags. | [optional] 
**hosted_page_logo_image** | **str** | A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. | [optional] 
**hosted_page_sharing_icons** | **bool** | Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, &lt;strong&gt;true&lt;/strong&gt;, includes sharing icons on the hosted page. Specify &lt;strong&gt;false&lt;/strong&gt; to omit sharing icons. | [optional] 
**hosted_page_title** | **str** | A title for the page that appears above the player. Can&#39;t include custom HTML, JavaScript, or other tags. | [optional] 
**logo_image** | **str** | A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. | [optional] 
**logo_position** | **str** | The corner of the player in which you want the player logo to appear. The default is &lt;strong&gt;top-left&lt;/strong&gt;. | [optional] 
**remove_hosted_page_logo_image** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, removes the logo file from the output. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**remove_logo_image** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, removes the logo file from the output. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**remove_video_poster_image** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, removes the poster image from the output. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**responsive** | **bool** | A player whose size adjusts according to the device on which it&#39;s being viewed. If &lt;strong&gt;true&lt;/strong&gt;, creates a responsive player. If &lt;strong&gt;false&lt;/strong&gt;, specify a &lt;strong&gt;width&lt;/strong&gt;. | [optional] 
**type** | **str** | The player you want to use. Valid values are &lt;strong&gt;original_html5&lt;/strong&gt;, which provides HTML5 playback and falls back to Flash on older browsers, and &lt;strong&gt;wowza_player&lt;/strong&gt;, which provides HTML5 playback over Apple HLS. &lt;strong&gt;wowza_player&lt;/strong&gt; requires that &lt;em&gt;target_delivery_protocol&lt;/em&gt; be &lt;strong&gt;hls-https&lt;/strong&gt; and &lt;em&gt;closed_caption_type&lt;/em&gt; be &lt;strong&gt;none&lt;/strong&gt;. The default is &lt;strong&gt;original_html5&lt;/strong&gt;. | [optional] 
**video_poster_image** | **str** | A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. | [optional] 
**width** | **int** | The width, in pixels, of a fixed-size player. The default is &lt;strong&gt;640&lt;/strong&gt;. | [optional] 

## Example

```python
from openapi_client.models.player3 import Player3

# TODO update the JSON string below
json = "{}"
# create an instance of Player3 from a JSON string
player3_instance = Player3.from_json(json)
# print the JSON string representation of the object
print(Player3.to_json())

# convert the object into a dict
player3_dict = player3_instance.to_dict()
# create an instance of Player3 from a dict
player3_from_dict = Player3.from_dict(player3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


