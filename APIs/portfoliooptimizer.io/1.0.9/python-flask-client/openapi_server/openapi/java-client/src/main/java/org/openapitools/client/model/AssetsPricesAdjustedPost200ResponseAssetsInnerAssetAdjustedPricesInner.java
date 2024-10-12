/*
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.Arrays;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:30.576111-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner {
  public static final String SERIALIZED_NAME_DATE = "date";
  @SerializedName(SERIALIZED_NAME_DATE)
  private String date;

  public static final String SERIALIZED_NAME_DIVIDEND_ADJUSTED_CLOSE = "dividendAdjustedClose";
  @SerializedName(SERIALIZED_NAME_DIVIDEND_ADJUSTED_CLOSE)
  private BigDecimal dividendAdjustedClose;

  public static final String SERIALIZED_NAME_FULLY_ADJUSTED_CLOSE = "fullyAdjustedClose";
  @SerializedName(SERIALIZED_NAME_FULLY_ADJUSTED_CLOSE)
  private BigDecimal fullyAdjustedClose;

  public static final String SERIALIZED_NAME_SPLIT_ADJUSTED_CLOSE = "splitAdjustedClose";
  @SerializedName(SERIALIZED_NAME_SPLIT_ADJUSTED_CLOSE)
  private BigDecimal splitAdjustedClose;

  public AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner() {
  }

  public AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner date(String date) {
    this.date = date;
    return this;
  }

  /**
   * The date corresponding to the date t in format YYYY-MM-DD
   * @return date
   */
  @javax.annotation.Nonnull
  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }


  public AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner dividendAdjustedClose(BigDecimal dividendAdjustedClose) {
    this.dividendAdjustedClose = dividendAdjustedClose;
    return this;
  }

  /**
   * The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided
   * minimum: 0
   * @return dividendAdjustedClose
   */
  @javax.annotation.Nullable
  public BigDecimal getDividendAdjustedClose() {
    return dividendAdjustedClose;
  }

  public void setDividendAdjustedClose(BigDecimal dividendAdjustedClose) {
    this.dividendAdjustedClose = dividendAdjustedClose;
  }


  public AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner fullyAdjustedClose(BigDecimal fullyAdjustedClose) {
    this.fullyAdjustedClose = fullyAdjustedClose;
    return this;
  }

  /**
   * The dividend(s) and split(s) adjusted close price of the asset at the date t
   * minimum: 0
   * @return fullyAdjustedClose
   */
  @javax.annotation.Nonnull
  public BigDecimal getFullyAdjustedClose() {
    return fullyAdjustedClose;
  }

  public void setFullyAdjustedClose(BigDecimal fullyAdjustedClose) {
    this.fullyAdjustedClose = fullyAdjustedClose;
  }


  public AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner splitAdjustedClose(BigDecimal splitAdjustedClose) {
    this.splitAdjustedClose = splitAdjustedClose;
    return this;
  }

  /**
   * The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided
   * minimum: 0
   * @return splitAdjustedClose
   */
  @javax.annotation.Nullable
  public BigDecimal getSplitAdjustedClose() {
    return splitAdjustedClose;
  }

  public void setSplitAdjustedClose(BigDecimal splitAdjustedClose) {
    this.splitAdjustedClose = splitAdjustedClose;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner assetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner = (AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner) o;
    return Objects.equals(this.date, assetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.date) &&
        Objects.equals(this.dividendAdjustedClose, assetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.dividendAdjustedClose) &&
        Objects.equals(this.fullyAdjustedClose, assetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.fullyAdjustedClose) &&
        Objects.equals(this.splitAdjustedClose, assetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.splitAdjustedClose);
  }

  @Override
  public int hashCode() {
    return Objects.hash(date, dividendAdjustedClose, fullyAdjustedClose, splitAdjustedClose);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner {\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    dividendAdjustedClose: ").append(toIndentedString(dividendAdjustedClose)).append("\n");
    sb.append("    fullyAdjustedClose: ").append(toIndentedString(fullyAdjustedClose)).append("\n");
    sb.append("    splitAdjustedClose: ").append(toIndentedString(splitAdjustedClose)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("date");
    openapiFields.add("dividendAdjustedClose");
    openapiFields.add("fullyAdjustedClose");
    openapiFields.add("splitAdjustedClose");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("date");
    openapiRequiredFields.add("fullyAdjustedClose");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner is not found in the empty JSON string", AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("date").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `date` to be a primitive type in the JSON string but got `%s`", jsonObj.get("date").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.class));

       return (TypeAdapter<T>) new TypeAdapter<AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner>() {
           @Override
           public void write(JsonWriter out, AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner
   * @throws IOException if the JSON string is invalid with respect to AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner
   */
  public static AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.class);
  }

  /**
   * Convert an instance of AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

