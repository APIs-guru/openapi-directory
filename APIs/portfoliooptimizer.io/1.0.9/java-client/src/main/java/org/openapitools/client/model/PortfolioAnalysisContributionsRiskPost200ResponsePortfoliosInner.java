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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
 * PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:17.384654-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner {
  public static final String SERIALIZED_NAME_ASSETS_GROUPS_RISK_CONTRIBUTIONS = "assetsGroupsRiskContributions";
  @SerializedName(SERIALIZED_NAME_ASSETS_GROUPS_RISK_CONTRIBUTIONS)
  private List<BigDecimal> assetsGroupsRiskContributions = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_RISK_CONTRIBUTIONS = "assetsRiskContributions";
  @SerializedName(SERIALIZED_NAME_ASSETS_RISK_CONTRIBUTIONS)
  private List<BigDecimal> assetsRiskContributions = new ArrayList<>();

  public PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner() {
  }

  public PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner assetsGroupsRiskContributions(List<BigDecimal> assetsGroupsRiskContributions) {
    this.assetsGroupsRiskContributions = assetsGroupsRiskContributions;
    return this;
  }

  public PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner addAssetsGroupsRiskContributionsItem(BigDecimal assetsGroupsRiskContributionsItem) {
    if (this.assetsGroupsRiskContributions == null) {
      this.assetsGroupsRiskContributions = new ArrayList<>();
    }
    this.assetsGroupsRiskContributions.add(assetsGroupsRiskContributionsItem);
    return this;
  }

  /**
   * assetsGroupsRiskContributions[k] is the risk contribution of the group of assets k to the risk of the portfolio
   * @return assetsGroupsRiskContributions
   */
  @javax.annotation.Nullable
  public List<BigDecimal> getAssetsGroupsRiskContributions() {
    return assetsGroupsRiskContributions;
  }

  public void setAssetsGroupsRiskContributions(List<BigDecimal> assetsGroupsRiskContributions) {
    this.assetsGroupsRiskContributions = assetsGroupsRiskContributions;
  }


  public PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner assetsRiskContributions(List<BigDecimal> assetsRiskContributions) {
    this.assetsRiskContributions = assetsRiskContributions;
    return this;
  }

  public PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner addAssetsRiskContributionsItem(BigDecimal assetsRiskContributionsItem) {
    if (this.assetsRiskContributions == null) {
      this.assetsRiskContributions = new ArrayList<>();
    }
    this.assetsRiskContributions.add(assetsRiskContributionsItem);
    return this;
  }

  /**
   * assetsRiskContributions[i] is the risk contribution of the asset i to the risk of the portfolio
   * @return assetsRiskContributions
   */
  @javax.annotation.Nonnull
  public List<BigDecimal> getAssetsRiskContributions() {
    return assetsRiskContributions;
  }

  public void setAssetsRiskContributions(List<BigDecimal> assetsRiskContributions) {
    this.assetsRiskContributions = assetsRiskContributions;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner portfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner = (PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner) o;
    return Objects.equals(this.assetsGroupsRiskContributions, portfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.assetsGroupsRiskContributions) &&
        Objects.equals(this.assetsRiskContributions, portfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.assetsRiskContributions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assetsGroupsRiskContributions, assetsRiskContributions);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner {\n");
    sb.append("    assetsGroupsRiskContributions: ").append(toIndentedString(assetsGroupsRiskContributions)).append("\n");
    sb.append("    assetsRiskContributions: ").append(toIndentedString(assetsRiskContributions)).append("\n");
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
    openapiFields.add("assetsGroupsRiskContributions");
    openapiFields.add("assetsRiskContributions");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("assetsRiskContributions");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner is not found in the empty JSON string", PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the optional json data is an array if present
      if (jsonObj.get("assetsGroupsRiskContributions") != null && !jsonObj.get("assetsGroupsRiskContributions").isJsonNull() && !jsonObj.get("assetsGroupsRiskContributions").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsGroupsRiskContributions` to be an array in the JSON string but got `%s`", jsonObj.get("assetsGroupsRiskContributions").toString()));
      }
      // ensure the required json array is present
      if (jsonObj.get("assetsRiskContributions") == null) {
        throw new IllegalArgumentException("Expected the field `linkedContent` to be an array in the JSON string but got `null`");
      } else if (!jsonObj.get("assetsRiskContributions").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsRiskContributions` to be an array in the JSON string but got `%s`", jsonObj.get("assetsRiskContributions").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.class));

       return (TypeAdapter<T>) new TypeAdapter<PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner>() {
           @Override
           public void write(JsonWriter out, PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner
   * @throws IOException if the JSON string is invalid with respect to PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner
   */
  public static PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.class);
  }

  /**
   * Convert an instance of PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

