import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigApacheSlingReferrerFilterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.empty" })
  allowEmpty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.empty@TypeHint" })
  allowEmptyAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.hosts" })
  allowHosts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.hosts.regexp" })
  allowHostsRegexp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.hosts.regexp@TypeHint" })
  allowHostsRegexpAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow.hosts@TypeHint" })
  allowHostsAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter.methods" })
  filterMethods?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter.methods@TypeHint" })
  filterMethodsAtTypeHint?: string;
}


export class PostConfigApacheSlingReferrerFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostConfigApacheSlingReferrerFilterQueryParams;
}


export class PostConfigApacheSlingReferrerFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
